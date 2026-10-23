"""Genera las versiones de hover de las fotos de la galería:

- SPLASH: todo en blanco y negro salvo un rango de tono, que se satura un poco.
- POP: más viveza, contraste y nitidez, con una viñeta suave que resalta al sujeto.

Uso: python scripts/color-splash.py   (requiere Pillow y numpy)
Salida: src/assets/photos/splash/<nombre>.jpg
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

PHOTOS = Path(__file__).resolve().parent.parent / 'src' / 'assets' / 'photos'

# nombre: (tono central en grados, ancho ±, saturación mínima, refuerzo de saturación)
SPLASH = {
    'cempasuchil': (38, 18, 0.30, 1.25),  # amarillo
    'teclado': (170, 25, 0.08, 2.2),  # verde menta
    'playa': (208, 26, 0.18, 1.3),  # azul
    'burbujas': (305, 38, 0.15, 1.3),  # morado
}

# nombre: (viveza, contraste, fuerza de la viñeta 0–1)
POP = {
    'gatitos': (1.35, 1.12, 0.45),
}


def smoothstep(edge0, edge1, x):
    t = np.clip((x - edge0) / (edge1 - edge0), 0, 1)
    return t * t * (3 - 2 * t)


def splash(src: Path, dst: Path, center, width, min_sat, boost):
    rgb = Image.open(src).convert('RGB')
    hsv = np.asarray(rgb.convert('HSV')).astype(np.float32) / 255
    h, s, v = hsv[..., 0] * 360, hsv[..., 1], hsv[..., 2]

    dist = np.abs((h - center + 180) % 360 - 180)
    weight = (1 - smoothstep(width * 0.6, width, dist)) * smoothstep(min_sat * 0.5, min_sat, s)

    hsv[..., 1] = np.clip(s * (1 + (boost - 1) * weight), 0, 1)
    hsv_img = Image.frombytes('HSV', rgb.size, (hsv * 255).astype(np.uint8).tobytes())
    color = np.asarray(hsv_img.convert('RGB')).astype(np.float32)
    gray = np.asarray(rgb.convert('L').convert('RGB')).astype(np.float32) * 0.85
    out = gray + weight[..., None] * (color - gray)

    dst.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(out.clip(0, 255).astype(np.uint8)).save(dst, quality=85, optimize=True)


def pop(src: Path, dst: Path, vibrance, contrast, vignette):
    rgb = Image.open(src).convert('RGB')
    # Viveza: satura más lo que tiene poco color y respeta lo que ya es intenso.
    hsv = np.asarray(rgb.convert('HSV')).astype(np.float32) / 255
    hsv[..., 1] = np.clip(hsv[..., 1] + (vibrance - 1) * hsv[..., 1] * (1 - hsv[..., 1]) * 2, 0, 1)
    img = Image.frombytes('HSV', rgb.size, (hsv * 255).astype(np.uint8).tobytes()).convert('RGB')
    img = ImageEnhance.Contrast(img).enhance(contrast)
    img = img.filter(ImageFilter.UnsharpMask(radius=3, percent=90, threshold=2))

    w, h = img.size
    y, x = np.ogrid[:h, :w]
    r = np.sqrt(((x - w / 2) / (w / 2)) ** 2 + ((y - h / 2) / (h / 2)) ** 2) / np.sqrt(2)
    mask = 1 - vignette * smoothstep(0.35, 1.0, r)
    out = np.asarray(img).astype(np.float32) * mask[..., None]

    dst.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(out.clip(0, 255).astype(np.uint8)).save(dst, quality=85, optimize=True)


if __name__ == '__main__':
    for name, params in SPLASH.items():
        splash(PHOTOS / f'{name}.jpg', PHOTOS / 'splash' / f'{name}.jpg', *params)
        print('splash', name)
    for name, params in POP.items():
        pop(PHOTOS / f'{name}.jpg', PHOTOS / 'splash' / f'{name}.jpg', *params)
        print('pop', name)
