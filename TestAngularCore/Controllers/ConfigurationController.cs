using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TestAngularCore.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ConfigurationController : ControllerBase
	{
		private readonly ILogger<ConfigurationController> _logger;

		public ConfigurationController(ILogger<ConfigurationController> logger)
		{
			_logger = logger;
		}

		[HttpGet, Route(@"settings")]
		public IActionResult GetSettings()
		{
			Dictionary<string, string> result = new Dictionary<string, string>();
			result.Add("environment", "Development");

			return Ok(result);
		}
	}
}
