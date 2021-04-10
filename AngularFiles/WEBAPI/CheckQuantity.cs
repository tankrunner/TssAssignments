using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using System.Web;


namespace Business.Managers
{
    public class CheckQuantity
    {

        public bool checkQuantity(int[] addedToCart, List<int> availableQuantity)
        {
            for(int i=0; i<4; i++)
            {
                if(addedToCart[i]>availableQuantity[i])
                {
                    return false;
                }
            }
            return true;
        }

        
    }
}
