using PortfolioApi.Models;
using System.Net;
using System.Net.Mail;

namespace PortfolioApi.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<EmailService> _logger;

        public EmailService(IConfiguration configuration, ILogger<EmailService> logger)
        {
            _configuration = configuration;
            _logger = logger;
        }

        public async Task<bool> SendContactEmailAsync(ContactRequest request)
        {
            try
            {
                // For demo purposes, we'll just log the contact request
                // In production, you would configure SMTP settings and send actual emails
                
                _logger.LogInformation("Contact form submission received:");
                _logger.LogInformation($"Name: {request.Name}");
                _logger.LogInformation($"Email: {request.Email}");
                _logger.LogInformation($"Subject: {request.Subject}");
                _logger.LogInformation($"Message: {request.Message}");

                // Simulate email sending delay
                await Task.Delay(1000);

                // In a real implementation, you would:
                // 1. Configure SMTP settings in appsettings.json
                // 2. Create and send the email using SmtpClient
                // 3. Handle any exceptions appropriately

                /*
                var smtpClient = new SmtpClient(_configuration["Email:SmtpServer"])
                {
                    Port = int.Parse(_configuration["Email:Port"]),
                    Credentials = new NetworkCredential(
                        _configuration["Email:Username"], 
                        _configuration["Email:Password"]
                    ),
                    EnableSsl = true,
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_configuration["Email:FromAddress"]),
                    Subject = $"Portfolio Contact: {request.Subject}",
                    Body = $"Name: {request.Name}\nEmail: {request.Email}\n\nMessage:\n{request.Message}",
                    IsBodyHtml = false,
                };

                mailMessage.To.Add(_configuration["Email:ToAddress"]);

                await smtpClient.SendMailAsync(mailMessage);
                */

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error sending contact email");
                return false;
            }
        }
    }
}
