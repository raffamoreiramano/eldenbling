import Appearance from '@/models/Appearance'
import styles from './styles.module.css'
import Table from '../Table'
import Color from '../Color'
import { Fragment } from 'react'

export default function AppearanceSheet({ appearance }: { appearance: Appearance }) {
  return <div className={styles.container}>
    {
      Object.entries(appearance).map((_value: [string, number | object], index) => {
        const [key, fieldset] = _value

        if (key !== 'id') {
          return <Table collapsable={true} key={index}>
            <thead>
              <tr>
                <th>{key}</th>
              </tr>
            </thead>

            <tbody>
              {
                Object.entries(fieldset).map((fields: [string, number | string | boolean | [number, number, number] | object | undefined], index) => {
                  const [field, value] = fields

                  if (Array.isArray(value)) {
                    const [R, G, B] = value;

                    return <tr key={index}>
                      <td>{field}</td>
                      <td><Color RGB={[R, G, B]}/></td>
                    </tr>
                  }

                  if (typeof value === "object") {
                    const entries = Object.entries(value)

                    return <Fragment key={index}>
                      <tr key={index}>
                        <th colSpan={2}>Tweak Tattoo/Mark</th>
                      </tr>

                      {
                        entries.map((nested: [string, number | boolean], index) => {
                          const [_field, _value] = nested;

                          if (typeof _value === "boolean") {
                            return <tr key={index}>
                              <td>{_field}</td>
                              <td>{_value ? "On" : "Off"}</td>
                            </tr>
                          }

                          return <tr key={index}>
                            <td>{_field}</td>
                            <td>{_value}</td>
                          </tr>
                        })
                      }

                      <tr>
                        <td colSpan={2}></td>
                      </tr>
                    </Fragment>
                  }

                  if (typeof value === "undefined") {
                    return <tr key={index}>
                      <td>{field}</td>
                      <td>Match</td>
                    </tr>
                  }

                  if (typeof value === "boolean") {
                    switch (field) {
                      case "Body Type":
                        return <tr key={index}>
                          <td>{field}</td>
                          <td>{value ? "Type B" : "Type A"}</td>
                        </tr>
                      case "Musculature":
                        return <tr key={index}>
                          <td>{field}</td>
                          <td>{value ? "Muscular" : "Standard"}</td>
                        </tr>
                      default:
                        return <tr key={index}>
                          <td>{field}</td>
                          <td>{value ? "On" : "Off"}</td>
                        </tr>
                    }
                  }

                  return <tr key={index}>
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