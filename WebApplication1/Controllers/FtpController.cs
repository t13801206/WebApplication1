using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FtpController : ControllerBase
    {
        private readonly FtpClient _ftpClient;
        public FtpController()
        {
            _ftpClient = new FtpClient();
        }

        // GET: api/Ftp
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return _ftpClient.GetFtpRootDirs();

            //return new string[] { "value1", "value2" };
        }

        // GET: api/Ftp/5
        //[HttpGet("{dirName}", Name = "Get")]
        [HttpGet("{dirName}")]
        public IEnumerable<string> GetFiles(string dirName)
        {
            return _ftpClient.GetFtpFiles(dirName);
        }

        // GET: api/Ftp/Dataset1/Image1
        //[HttpGet("{dirName}/{fileName}", Name = "GetImage")]
        [HttpGet("{dirName}/{fileName}")]
        public string GetImage(string temp)
        {
            return _ftpClient.GetImageDataBase64("direName", "fileName");

          //return "value";
        }


        // POST: api/Ftp
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Ftp/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
