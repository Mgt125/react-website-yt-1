namespace server.Models
{
    public class BookingDto
    {
        public string UserId { get; set; } = "";
        public string GameType { get; set; } = "";
        public string Station { get; set; } = "";
        public string Date { get; set; } = "";    
        public string Time { get; set; } = "";    
        public int DurationMinutes { get; set; }
        public decimal Cost { get; set; }
    }
}
