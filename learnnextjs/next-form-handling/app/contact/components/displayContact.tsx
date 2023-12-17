import { contactTypes } from "@/types/commonTypes";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>

      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
          {props.contactData.map((item, index) => {
            return (
              <tr  key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
              </tr>
            )
          })}

        </table>
      </div>

    </div>
  )
}
