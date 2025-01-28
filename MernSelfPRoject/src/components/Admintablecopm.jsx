import React from 'react'

const Admintablecopm = ({name,email,isAdmin}) => {
  return (
    <div>
        <section className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2 border-b">Order ID</th>
                  <th className="py-2 border-b">Customer</th>
                  <th className="py-2 border-b">Amount</th>
                  <th className="py-2 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 border-b">#1234</td>
                  <td className="py-2 border-b">John Doe</td>
                  <td className="py-2 border-b">$150</td>
                  <td className="py-2 border-b">Completed</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">#1235</td>
                  <td className="py-2 border-b">Jane Smith</td>
                  <td className="py-2 border-b">$200</td>
                  <td className="py-2 border-b">Pending</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </section>
    </div>
  )
}

export default Admintablecopm
