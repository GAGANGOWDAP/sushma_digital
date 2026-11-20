import urllib.parse

# Diamond shape pattern
svg_diamond = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="#B9AA98" stroke-width="1.2" stroke-opacity="0.22"/></svg>'
print("SVG Diamond encoded:")
print("url('data:image/svg+xml," + urllib.parse.quote(svg_diamond) + "')")

# Intersecting diamond lattice
svg_lattice = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M0 0 L40 40 M40 0 L0 40" fill="none" stroke="#B9AA98" stroke-width="1" stroke-opacity="0.22"/></svg>'
print("\nSVG Lattice encoded:")
print("url('data:image/svg+xml," + urllib.parse.quote(svg_lattice) + "')")

# Concentric luxury diamond
svg_concentric = '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 0 L48 24 L24 48 L0 24 Z" fill="none" stroke="#B9AA98" stroke-width="1" stroke-opacity="0.2"/><path d="M24 8 L40 24 L24 40 L8 24 Z" fill="none" stroke="#B9AA98" stroke-width="0.8" stroke-opacity="0.12"/></svg>'
print("\nSVG Concentric encoded:")
print("url('data:image/svg+xml," + urllib.parse.quote(svg_concentric) + "')")
