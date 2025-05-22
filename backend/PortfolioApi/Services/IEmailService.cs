using PortfolioApi.Models;

namespace PortfolioApi.Services
{
    public interface IEmailService
    {
        Task<bool> SendContactEmailAsync(ContactRequest request);
    }
}
