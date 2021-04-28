using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Business.Managers
{
    public class LoginManager
    {
        public bool authenticateUser(string[] arr)
        {
            if (arr[0] == "rg" && arr[1] == "hello")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
