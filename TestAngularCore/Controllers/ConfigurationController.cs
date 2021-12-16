using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using TestAngularCore.Models;

namespace TestAngularCore.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ConfigurationController : ControllerBase
	{
		private readonly IWebHostEnvironment _env;
		private readonly ILogger<ConfigurationController> _logger;
		private readonly AppSettings _appSettings;

		public ConfigurationController(IWebHostEnvironment env, ILogger<ConfigurationController> logger, IOptions<AppSettings> appsettings)
		{
			_env = env;
			_logger = logger;
			_appSettings = appsettings.Value;
		}

		[HttpGet, Route(@"settings")]
		public IActionResult GetSettings()
		{
			Dictionary<string, string> result = new Dictionary<string, string>();
			result.Add("environment", _env.EnvironmentName);
			result.Add("location", _appSettings.Location);

			return Ok(result);
		}
	}
}
