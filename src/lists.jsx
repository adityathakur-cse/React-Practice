import { useState } from 'react'
import './App.css'
function Abc(){
    return (
        <div className="table">
            <table border="1">
              <thead>
                <tr>
                  <th>List 1</th>
                  <th>List 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td>hi</td>
                  <td>hy</td>
                </tr>
                <tr>
                  <td>bye</td>
                  <td>bye</td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}
export default Abc