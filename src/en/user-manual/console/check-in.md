# Check-in Management

Set up and manage on-site attendee check-in for your conference.

## Check-in Methods

MeetEasy supports multiple check-in approaches:

| Method | How it works |
|--------|-------------|
| **Ticket code** | Attendee enters or scans their unique registration code |
| **QR scan** | Organizer scans attendee's QR code from MeetApp |
| **Manual lookup** | Organizer searches by name, email, or phone |

## Configure Check-in

1. Go to **Conference** → **Check-in** → **Settings**.
2. Enable check-in for the conference.
3. Choose allowed methods (ticket code, QR, manual).
4. Set check-in window (start/end times relative to event dates).
5. Optionally require seat assignment before check-in.

![Check-in settings](/images/placeholder.svg)

<!-- TODO: Add screenshot of check-in settings -->

## On-site Check-in (Organizer)

During the event, organizers use Console to check in attendees:

1. Open **Check-in** from the conference menu.
2. Select check-in method:
   - **Scan QR** — Use device camera to scan attendee QR
   - **Enter code** — Type ticket code manually
   - **Search** — Find attendee by name or contact info
3. Confirm check-in; status updates in real time.

![On-site check-in screen](/images/placeholder.svg)

<!-- TODO: Add screenshot of organizer check-in interface -->

## Check-in Dashboard

Monitor check-in progress:

- **Total registered** vs **checked in** count
- **Check-in rate** over time chart
- **Recent check-ins** list with timestamps
- Export check-in report for post-event analysis

## Self Check-in (Attendee)

Attendees can self check-in via MeetApp:

1. Open the conference in MeetApp.
2. Navigate to **Check-in**.
3. Enter ticket code or show QR code to a staff member.
4. View confirmation and assigned seat (if configured).

See [MeetApp Check-in](/en/user-manual/meetapp/check-in) for attendee instructions.

## Integration with Seating

When seating is configured:

- Check-in can trigger automatic seat assignment
- Attendees see their seat number immediately after check-in
- See [Seating Management](./seating.md) for seat map setup

## Tips

- Test check-in flow with a test registration before event day
- Assign dedicated staff with Console access for check-in stations
- Enable QR scanning for fastest throughput at large events
- Monitor the dashboard for bottlenecks during peak arrival times
