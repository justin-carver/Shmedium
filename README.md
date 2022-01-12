# Shmedium

<img src="https://i.imgur.com/93OgZaS.png" width="50%"/>

Author: Justin Carver<br />
License: GPL-3

Shmedium is a Firefox extension that detects Medium paywall articles when navigating through Google Search results and will flag them appropriately.

This is a simple Firefox add-on I created in a couple of minutes after becoming frustrated at some publicly free and readily available API information being gatekept behind Medium-hosted paywalls.

It's only a couple of lines of code; it scans a Google Search page for links that lead to Medium domains, fetches information within them to see if it contains the 'meteredContent' class on an html object that denotes the article is paywalled, and then applies a simple CSS tag within the search results on the Google page to warn you not to waste your time clicking erraneously.

*This application serves only as a notice that an article result is metered, and does not bypass restrictions set in place by Medium. There are other add-ons that can 'seemingly' do get around this, but most of them are now broken on the marketplace at the time of this commit.*
