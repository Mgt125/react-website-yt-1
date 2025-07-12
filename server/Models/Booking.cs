using System;

namespace server.Models
{
    public class Booking
    {
        public int Id { get; set; }

        public required string UserId { get; set; }

        public required string GameType { get; set; }

        public required string Station { get; set; }

        public DateTime Date { get; set; }

        public TimeSpan Time { get; set; }

        public int DurationMinutes { get; set; }

        public decimal Cost { get; set; }
    }
}
