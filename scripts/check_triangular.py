import urllib.parse
import xml.etree.ElementTree as ET
import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Find .hero-triangular-pattern block
m_block = re.search(r'\.hero-triangular-pattern\s*\{([^}]+(?:url\([^}]+\)[^}]+)*)\}', css)
if not m_block:
    print(".hero-triangular-pattern block NOT FOUND!")
else:
    block = m_block.group(0)
    print("Found .hero-triangular-pattern block!")
    m = re.search(r'url\(["\'](data:image/svg\+xml,[^"\']+)["\']\)', block)
    if not m:
        print("data:image/svg URI not found in block!")
    else:
        full_uri = m.group(1)
        data = full_uri.replace('data:image/svg+xml,', '')
        svg_str = urllib.parse.unquote(data)
        print("SVG length:", len(svg_str))
        print("First 200 chars:\n", svg_str[:200])
        print("Last 200 chars:\n", svg_str[-200:])
        try:
            root = ET.fromstring(svg_str)
            print("XML parse SUCCESS! Tag:", root.tag)
            pattern = root.find('.//{http://www.w3.org/2000/svg}pattern')
            if pattern is not None:
                polys = pattern.findall('.//{http://www.w3.org/2000/svg}polygon')
                print(f"Polygons found: {len(polys)}")
                for p in polys[:5]:
                    print("  ", p.attrib)
        except Exception as e:
            print("XML parse ERROR:", e)
