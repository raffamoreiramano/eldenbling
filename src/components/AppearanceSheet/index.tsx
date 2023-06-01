import Appearance from '@/models/Appearance'
import styles from './styles.module.css'
import Table from '../Table'
import Color from '../Color'

export default function AppearanceSheet({ appearance }: { appearance: Appearance }) {
  return <div className={styles.container}>
    {
      Object.entries(appearance).map((_value: [string, number | object]) => {
        const [key, fieldset] = _value

        if (key !== 'id') {  
          return <Table collapsable={true}>
            <thead>
              <tr>
                <th>{key}</th>
              </tr>
            </thead>

            <tbody>
              {
                Object.entries(fieldset).map((fields: [string, number | string | boolean | [number, number, number] | object | undefined]) => {
                  const [field, value] = fields

                  if (Array.isArray(value)) {
                    const [R, G, B] = value;

                    return <tr>
                      <td>{field}</td>
                      <td><Color RGB={[R, G, B]}/></td>
                    </tr>
                  }

                  if (typeof value === "object") {
                    return <>
                      <tr>
                        <th colSpan={2}>Tweak Tattoo/Mark</th>
                      </tr>

                      {
                        Object.entries(value).map((nested: [string, number | boolean]) => {
                          const [_field, _value] = nested;

                          if (typeof _value === "boolean") {
                            return <tr>
                              <td>{_field}</td>
                              <td>{_value ? "On" : "Off"}</td>
                            </tr>
                          }

                          return <tr>
                            <td>{_field}</td>
                            <td>{_value}</td>
                          </tr>
                        })
                      }

                      <tr>
                        <td colSpan={2}></td>
                      </tr>
                    </>
                  }

                  if (typeof value === "undefined") {
                    return <tr>
                      <td>{field}</td>
                      <td>Match</td>
                    </tr>
                  }

                  if (typeof value === "boolean") {
                    switch (field) {
                      case "bodyType":
                        return <tr>
                          <td>{field}</td>
                          <td>{value ? "Type B" : "Type A"}</td>
                        </tr>
                      case "musculature":
                        return <tr>
                          <td>{field}</td>
                          <td>{value ? "Muscular" : "Standard"}</td>
                        </tr>
                      default:
                        return <tr>
                          <td>{field}</td>
                          <td>{value ? "On" : "Off"}</td>
                        </tr>
                    }
                  }

                  return <tr>
                    <td>{field}</td>
                    <td>{value}</td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        }
      })
    }
  </div>
}