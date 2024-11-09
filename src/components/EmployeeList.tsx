const EmployeeList = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center">Danh Sách Nhân Viên</h1>

        {/* Button to add new employee */}
        <div className="mb-6 flex justify-end">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-600">
            Thêm Nhân Viên
          </button>
        </div>

        {/* Employee Table */}
        <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-md">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
              <th className="px-6 py-4 border-b">Tên</th>
              <th className="px-6 py-4 border-b">Giới tính</th>
              <th className="px-6 py-4 border-b">Số điện thoại</th>
              <th className="px-6 py-4 border-b">Lương</th>
              <th className="px-6 py-4 border-b">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">Nguyễn Văn A</td>
              <td className="px-6 py-4 border-b">Nam</td>
              <td className="px-6 py-4 border-b">0123456789</td>
              <td className="px-6 py-4 border-b">5,000,000 VND</td>
              <td className="px-6 py-4 border-b">
                <button className="bg-yellow-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-yellow-600">
                  Sửa
                </button>
                <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList