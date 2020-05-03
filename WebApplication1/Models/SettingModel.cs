using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    [JsonObject("setting")]
    public class SettingModel
    {
        [JsonProperty("model")]
        public string ModelName { get; set; }
        [JsonProperty("worker")]
        public string[] Workers { get; set; }
        [JsonProperty("className")]
        public string[] ClassNames { get; set; }
    }
}
