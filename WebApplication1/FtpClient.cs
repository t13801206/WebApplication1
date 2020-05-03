using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class FtpClient
    {
        private string _uriRootStr;
        private string _username, _password;
        
        /// <summary>
        /// コンストラクタ
        /// </summary>
        public FtpClient()
        {
            _uriRootStr = "ftp://localhost/";
            _username = "ftpuser";
            _password = "ftpuserpass";
        }

        public string[] GetFtpRootDirs()
        {
            return GetFtpList(_uriRootStr);
        }
        public string GetImageDataBase64(string dirName, string fileName)
        {
            string retStr = "";
            try
            {
                //var str = Path.Combine(_uriRootStr, dirName, GetFileName(dirName, fileIndex));
                var str = Path.Combine(_uriRootStr, dirName, fileName);

                FtpWebRequest ftpReq = (FtpWebRequest)WebRequest.Create(new Uri(str));
                ftpReq.Credentials = new NetworkCredential(_username, _password);
                ftpReq.Method = WebRequestMethods.Ftp.DownloadFile;
                ftpReq.KeepAlive = false;
                ftpReq.UsePassive = false;
                ftpReq.UseBinary = false;

                using (FtpWebResponse ftpRes = (FtpWebResponse)ftpReq.GetResponse())
                using (Stream resStrm = ftpRes.GetResponseStream())
                using (MemoryStream memStream = new MemoryStream())
                {
                    byte[] buffer = new byte[1024];
                    while (true)
                    {
                        int readSize = resStrm.Read(buffer, 0, buffer.Length);
                        if (readSize == 0)
                            break;

                        memStream.Write(buffer, 0, readSize);
                    }

                    byte[] b = memStream.ToArray();
                    retStr = Convert.ToBase64String(b);
                }
            }
            catch (Exception e) { }
            return retStr;
        }
        public string GetJsonFile()
        {
            string retStr;

            //var str = Path.Combine(_uriRootStr, dirName, GetFileName(dirName, fileIndex));
            var str = Path.Combine(_uriRootStr, "Settings.json");

            FtpWebRequest ftpReq = (FtpWebRequest)WebRequest.Create(new Uri(str));
            ftpReq.Credentials = new NetworkCredential(_username, _password);
            ftpReq.Method = WebRequestMethods.Ftp.DownloadFile;
            ftpReq.KeepAlive = false;
            ftpReq.UsePassive = false;
            ftpReq.UseBinary = false;

            using (FtpWebResponse ftpRes = (FtpWebResponse)ftpReq.GetResponse())
            using (Stream resStrm = ftpRes.GetResponseStream())
            using (MemoryStream memStream = new MemoryStream())
            {
                byte[] buffer = new byte[1024];
                while (true)
                {
                    int readSize = resStrm.Read(buffer, 0, buffer.Length);
                    if (readSize == 0)
                        break;

                    memStream.Write(buffer, 0, readSize);
                }

                byte[] b = memStream.ToArray();
                retStr = System.Text.Encoding.UTF8.GetString(b);
            }

            return retStr;
        }
        public string[] GetFtpFiles(string dirName)
        {
            return GetFtpList(Path.Combine(_uriRootStr, dirName));
        }
        private string GetFileName(string dirName, string fileIndex)
        {
            var files = GetFtpFiles(dirName);
            return files[int.Parse(fileIndex)];
        }
        private string[] GetFtpList(string uri)
        {
            string[] retArr = new string[] { "" };
            try
            {
                // リクエストの設定
                FtpWebRequest ftpReq = (FtpWebRequest)WebRequest.Create(new Uri(uri));
                ftpReq.Credentials = new NetworkCredential(_username, _password);
                ftpReq.Method = WebRequestMethods.Ftp.ListDirectory;
                ftpReq.KeepAlive = false;
                ftpReq.UsePassive = false;

                using (FtpWebResponse ftpRes = (FtpWebResponse)ftpReq.GetResponse())
                using (StreamReader sr = new StreamReader(ftpRes.GetResponseStream()))
                {
                    string res = sr.ReadToEnd();
                    //retArr = res.Replace("\r\n", "\n").Split(new[] { '\n', '\r' });
                    retArr = res.Replace("\r\n", ",").Split(',').Where(x => x != "").Where(x => !x.Contains(".json")).ToArray();


                    // 表示
                    Debug.WriteLine(res);
                }
            }
            catch(Exception e)
            {

            }

            return retArr;
        } 

        public string[] GetWorkers()
        {
            return new string[] { "aasa", "fsdsdf" };
        }

    }
}