using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Models;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookingsController(AppDbContext context)
        {
            _context = context;
        }

        /* Storing bookings to the database */
        [HttpPost]
        public async Task<IActionResult> CreateBooking([FromBody] BookingDto dto)
        {
            try
            {
                var booking = new Booking
                {
                    UserId = dto.UserId,
                    GameType = dto.GameType,
                    Station = dto.Station,
                    Date = DateTime.Parse(dto.Date),
                    Time = TimeSpan.Parse(dto.Time),
                    DurationMinutes = dto.DurationMinutes,
                    Cost = dto.Cost > 0 ? dto.Cost : dto.DurationMinutes * 1.5m //Calculating cost (R1.50 per minute)
                };

                _context.Bookings.Add(booking);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Booking saved", booking });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = "Failed to create booking", details = ex.Message });
            }
        }


        /*Getting bookings from the database */
        [HttpGet("user")]
        public IActionResult GetUserBookings([FromQuery] string userId)
        {
            if (string.IsNullOrEmpty(userId))
            {
                return BadRequest(new { error = "Missing userId query parameter" });
            }

            var bookings = _context.Bookings
                .Where(b => b.UserId == userId)
                .ToList();

            return Ok(new { bookings });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBooking(int id, [FromBody] BookingDto dto)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
            {
                return NotFound(new { error = "Booking not found" });
            }

            // Update fields
            booking.UserId = dto.UserId;
            booking.GameType = dto.GameType;
            booking.Station = dto.Station;
            booking.Date = DateTime.Parse(dto.Date);
            booking.Time = TimeSpan.Parse(dto.Time);
            booking.DurationMinutes = dto.DurationMinutes;
            booking.Cost = dto.DurationMinutes * 1.5m;

            await _context.SaveChangesAsync();
            return Ok(new { message = "Booking updated", booking });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooking(int id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
            {
                return NotFound(new { error = "Booking not found" });
            }

            _context.Bookings.Remove(booking);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Booking deleted" });
        }

    }
}
