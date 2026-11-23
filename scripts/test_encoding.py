import urllib.parse

# Case 1: Bad (what was in build_official_svg.py)
bad_raw = "<rect fill='url(%23a)'/>"
bad_encoded = urllib.parse.quote(bad_raw)
bad_decoded_by_browser = urllib.parse.unquote(bad_encoded)
print("Case 1 (what we had):")
print("  raw:", bad_raw)
print("  encoded:", bad_encoded)
print("  browser sees:", bad_decoded_by_browser)

# Case 2: Correct
good_raw = "<rect fill='url(#a)'/>"
good_encoded = urllib.parse.quote(good_raw)
good_decoded_by_browser = urllib.parse.unquote(good_encoded)
print("\nCase 2 (correct):")
print("  raw:", good_raw)
print("  encoded:", good_encoded)
print("  browser sees:", good_decoded_by_browser)
