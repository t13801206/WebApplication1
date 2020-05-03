using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingsController : ControllerBase
    {
        private readonly FtpClient _ftpClient;
        private List<SettingModel> _settingModels;
       
        public SettingsController()
        {
            _ftpClient = new FtpClient();
        }


        // GET: api/Settings
        [HttpGet]
        public string Get()
        {
            string jsonstring = _ftpClient.GetJsonFile();

            return jsonstring;
          //return JsonConvert.DeserializeObject<List<SettingModel>>(jsonstring);

    
            //return new string[] { "value1", "value2" };
        }

        //// GET: api/Settings/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Settings
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/Settings/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
