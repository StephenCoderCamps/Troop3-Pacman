using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Pacman.Startup))]
namespace Pacman
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
