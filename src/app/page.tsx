import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './styles.module.css'
import Input from '@/components/Input'
import Table from '@/components/Table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <main>
    <p>ELDEN BLING</p>
    <Input 
      id='Elden'
      label='Elden'
      name='Elden'
    />
    <Input 
      id='Bling'
      label='Bling'
      name='Bling'
    />

    <Table>
      <thead>
        <tr>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>128</td>
        </tr>
        
        <tr>
          <td>Francisco Chang</td>
          <td>128</td>
        </tr>
        
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>128</td>
        </tr>
        
        <tr>
          <td>Francisco Chang</td>
          <td>128</td>
        </tr>
        
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>128</td>
        </tr>
        
        <tr>
          <td>Francisco Chang</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>
    <button>Accept</button>
  </main>
}