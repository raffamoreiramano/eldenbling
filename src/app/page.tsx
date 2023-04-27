import { Inter } from 'next/font/google'
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

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Body</th>
          <th>Teste</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Body Type</td>
          <td>Type A</td>
        </tr>

        <tr>
          <td>Age</td>
          <td>Young</td>
        </tr>

        <tr>
          <td>Skin Color</td>
          <td>128 128 128</td>
        </tr>

        <tr>
          <th colSpan={2}>Alter Body</th>
        </tr>

        <tr>
          <td>Head</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Chest</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Abdomen</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Arms</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Legs</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Body Hair</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Body Hair Color</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>Musculature</td>
          <td>Standard</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Adjust Face Template</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Bone Structure</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Form Emphasis</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Apparent Age</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Facial Aesthetic</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Facial Balance</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Nose Size</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nose/Forehead Ratio</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Face Protrusion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Vert. Face Ratio</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Facial Structure</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Horiz. Face Ratio</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Forehead/Glabella</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Forehead Depth</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Forehead Protrusion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nose Bridge Height</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Bridge Protrusion 1</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Bridge Protrusion 2</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nose Bridge Width</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Brow Ridge</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Brow Ridge Height</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Inner Brow Ridge</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Outer Brow Ridge</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Eyes (Face Structure)</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Eyes Position</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Eyes Size</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Eyes Slant</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Eyes Spacing</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Nose Ridge</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Nose Ridge Depth</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nose Ridge Length</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nose Position</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nose Tip Height</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nose Protrusion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nose Height</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nose Slant</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Nostrils</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Nostril Slant</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nostril Size</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Nostril Width</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Cheeks</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Cheeks Height</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Cheeks Depth</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Cheeks Protrusion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Cheeks</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Lips</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Lip Shape</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Mouth Expression</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Lip Fullness</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Lip Size</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Lip Protrusion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Lip Thickness</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Mouth</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Mouth Protrusion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Mouth Slant</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Occlusion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Mouth Position</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Mouth Width</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Mouth-Chin Distance</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Chin</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Chin Tip Position</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Chin Length</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Chin Length</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Chin Protrusion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Chin Depth</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Chin Size</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Chin Height</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Chin Width</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Jaw</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Jaw Protrusion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Jaw Width</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Lower Jaw</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Jaw Contour</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Hair</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Hair</td>
          <td>8</td>
        </tr>

        <tr>
          <td>Hair Color</td>
          <td>128 128 128</td>
        </tr>

        <tr>
          <td>Luster</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Root Darkness</td>
          <td>128</td>
        </tr>

        <tr>
          <td>White Hairs</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Eyebrows</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Brow</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Brow Color</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>Luster</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>Root Darkness</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>White Hairs</td>
          <td>Match</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Facial Hair</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Beard</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Beard Color</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>Luster</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>Root Darkness</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>White Hairs</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>Stubble</td>
          <td>128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Eyelashes</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Eyelashes</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Eyelashes Color</td>
          <td>Match</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Eyes</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Right Iris Size</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Right Iris Color</td>
          <td>128</td>
        </tr>

        <tr>
          <td>R Eye Clouding</td>
          <td>128</td>
        </tr>

        <tr>
          <td>R Clouding Color</td>
          <td>128</td>
        </tr>

        <tr>
          <td>R Eye White Color</td>
          <td>128</td>
        </tr>

        <tr>
          <td>R Eye Position</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Left Iris Size</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>Left Iris Color</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>L Eye Clouding</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>L Clouding Color</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>L Eye White Color</td>
          <td>Match</td>
        </tr>

        <tr>
          <td>L Eye Position</td>
          <td>Match</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Skin Features</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Pores</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Skin Luster</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Dark Circles</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Dark Circles Color</td>
          <td>128 128 128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Cosmetics</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Eyeliner</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Eyeliner Color</td>
          <td>128 128 128</td>
        </tr>

        <tr>
          <td>Eyeshadow [↑]</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Eyeshadow Color [↑]</td>
          <td>128 128 128</td>
        </tr>

        <tr>
          <td>Eyeshadow [↓]</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Eyeshadow Color [↓]</td>
          <td>128 128 128</td>
        </tr>

        <tr>
          <td>Cheeks</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Cheeks Color</td>
          <td>128 128 128</td>
        </tr>

        <tr>
          <td>Lipstick</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Lipstick Color</td>
          <td>128 128 128</td>
        </tr>
      </tbody>
    </Table>

    <Table collapsable={true}>
      <thead>
        <tr>
          <th>Tattoo/Mark/Eyepatch</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Tattoo/Mark</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Tattoo/Mark Color</td>
          <td>128 128 128</td>
        </tr>

        <tr>
          <th colSpan={2}>Tweak Tattoo/Mark</th>
        </tr>

        <tr>
          <td>Position (Vert.)</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Position (Horiz.)</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Angle</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Expansion</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Flip</td>
          <td>Off</td>
        </tr>

        <tr>
          <td colSpan={2}></td>
        </tr>

        <tr>
          <td>Eyepatch</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Eyepatch Color</td>
          <td>128 128 128</td>
        </tr>
      </tbody>
    </Table>

    <button>Accept</button>
  </main>
}