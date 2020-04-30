using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class WorkItem
    {        
        public string Dir { get; set; }
        public string File { get; set; }
        public string Worker { get; set; }
        public string Result { get; set; }
    }
}
