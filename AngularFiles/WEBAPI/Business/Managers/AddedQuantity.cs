using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Managers
{
    public class AddedQuantity
    {
        int[] added = { 0, 0, 0, 0 };

        public void addQuantity(int pid)
        {
            added[pid] = 1;
        }

        public int[] getQuantity()
        {
            return added;
        }
    }
}
