using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1
{
    public class Test
    {
        public static void DoTest()
        {
            FtpClient ftpClient = new FtpClient();
            //ftpClient.GetImageDataBase64();

            string jsonstring = ftpClient.GetJsonFile();
         
            List<SettingModel> model1 = JsonConvert.DeserializeObject<List<SettingModel>>(jsonstring);



        }
    }
}
