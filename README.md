# Shmedium

Shmedium is a Firefox extension that detects Medium paywall articles when navigate through Google Search and will flag them appropriately.

This is a simple Firefox add-on I created in a couple of minutes after becoming frustrated at some publicly free and readily available API information being gatekept behind Medium-hosted paywalls.

It's only a couple of lines of code; it scans a Google Search page for links that lead to Medium domains, fetches information within them to see if it contains the 'meteredContent' class that denotes the article is paywalled, and then applies a simple CSS tag within the search results.
