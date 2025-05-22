using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Models;
using PortfolioApi.Services;

namespace PortfolioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailService;
        private readonly ILogger<ContactController> _logger;

        public ContactController(IEmailService emailService, ILogger<ContactController> logger)
        {
            _emailService = emailService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<ContactResponse>> SendContactMessage([FromBody] ContactRequest request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(new ContactResponse
                    {
                        Success = false,
                        Message = "Please fill in all required fields correctly."
                    });
                }

                var success = await _emailService.SendContactEmailAsync(request);

                if (success)
                {
                    return Ok(new ContactResponse
                    {
                        Success = true,
                        Message = "Thank you for your message! I'll get back to you soon."
                    });
                }
                else
                {
                    return StatusCode(500, new ContactResponse
                    {
                        Success = false,
                        Message = "Sorry, there was an error sending your message. Please try again later."
                    });
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing contact form submission");
                return StatusCode(500, new ContactResponse
                {
                    Success = false,
                    Message = "An unexpected error occurred. Please try again later."
                });
            }
        }

        [HttpGet("health")]
        public IActionResult HealthCheck()
        {
            return Ok(new { status = "healthy", timestamp = DateTime.UtcNow });
        }
    }
}
