# Analytics & Share Tracking

Monitor conference performance with visitor analytics, share attribution, and daily summaries.

## Analytics Dashboard

1. From Console, open your conference.
2. Navigate to **Analytics** or **Data**.
3. The dashboard shows key metrics for the selected date range.

![Analytics dashboard](/images/placeholder.svg)

<!-- TODO: Add screenshot of analytics dashboard -->

## Key Metrics

| Metric | Description |
|--------|-------------|
| **PV (Page Views)** | Total page views across the microsite |
| **UV (Unique Visitors)** | Distinct visitors (deduplicated by device/session) |
| **Registrations** | Total, pending, approved, and checked-in counts |
| **Check-in rate** | Percentage of approved registrants who checked in |
| **Share conversions** | Registrations attributed to share links |

## Visitor Behavior

Analyze how attendees interact with your microsite:

- **Page popularity** — Which VisuSpace pages get the most views
- **Visit duration** — Average time spent on the microsite
- **Device breakdown** — Mobile vs desktop, WeChat vs browser
- **Referrer sources** — Direct, share link, search, external

## Share Attribution

Track how attendees discover and share your conference:

### How It Works

1. MeetApp generates share links with tracking parameters (e.g., `?_s=share_code`).
2. When a recipient opens the link, the analytics SDK records the attribution chain.
3. If the recipient registers, the conversion is linked to the original sharer.

### View Share Reports

1. Go to **Analytics** → **Share Tracking**.
2. View share tree: who shared, how many clicks, how many conversions.
3. Identify top promoters and most effective share channels.

![Share attribution report](/images/placeholder.svg)

<!-- TODO: Add screenshot of share tracking report -->

## Daily Summaries

Automated daily rollups provide at-a-glance progress:

- New registrations today
- Check-ins today
- PV/UV for the day
- Top shared links

Daily summaries are available to both conference organizers (Console) and platform admins (Admin).

## Export Data

- Export analytics data as CSV from the dashboard
- Export registration lists with analytics metadata
- Schedule automated reports **[TBD]**

## Developer Reference

For the analytics event pipeline (FastStream, Socket.IO, batch upload), see [Analytics & Async Processing](/en/developer/analytics-async).

## Tips

- Share tracking links early — attribution data improves as the campaign runs
- Compare PV/UV ratio: high PV with low UV may indicate repeat visits (good) or bot traffic (investigate)
- Review share reports to identify and reward top community promoters
- Check analytics daily during the registration period to adjust marketing efforts
