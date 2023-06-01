export default class Appearance {
  "id"!: string

  "Body"!: {
    "Body Type": boolean
    "Age": number
    "Skin Color": number | [number, number, number]
    "Head": number
    "Chest": number
    "Abdomen": number
    "Arms": number
    "Legs": number
    "Body Hair": number
    "Body Hair Color": number | undefined
    "Musculature": boolean
  }
  

  "Adjust Face Template"!: {
    "Bone Structure": number
    "Form Emphasis": number
    "Apparent Age": number
    "Facial Aesthetic": number
  }

  "Facial  Balance"!: {
    "Nose Size": number
    "Nose Forehead Ratio": number
    "Face Protrusion": number
    "Vertical Face Ratio": number
    "Facial Structure": number
    "Horizontal Face Ratio": number
  }

  "Forehead/Glabella"!: {
    "Forehead Depth": number
    "Forehead Protrusion": number
    "Nose Bridge Height": number
    "Bridge Protrusion1": number
    "Bridge Protrusion2": number
    "Nose Bridge Width": number
  }

  "Brow  Ridge"!: {
    "Brow Ridge Height": number
    "Inner Brow Ridge": number
    "Outer Brow Ridge": number
  }

  "Eyes ( Face  Structure)"!: {
    "Eyes Position": number
    "Eyes Size": number
    "Eyes Slant": number
    "Eyes Spacing": number
  }

  "Nose  Ridge"!: {
    "Nose Ridge Depth": number
    "Nose Ridge Length": number
    "Nose Position": number
    "Nose Tip Height": number
    "Nose Protrusion": number
    "Nose Height": number
    "Nose Slant": number
  }

  "Nostrils"!: {
    "Nostril Slant": number
    "Nostril Size": number
    "Nostril Width": number
  }

  "Cheeks"!: {
    "Cheeks Height": number
    "Cheeks Depth": number
    "Cheeks Protrusion": number
    "Cheeks": number
  }

  "Lips"!: {
    "Lip Shape": number
    "Mouth Expresion": number
    "Lip Fullness": number
    "Lip Size": number
    "Lip Protrusion": number
    "Lip Thickness": number
  }

  "Mouth"!: {
    "Mouth Protrusion": number
    "Mouth Slant": number
    "Occlusion": number
    "Mouth Position": number
    "Mouth Width": number
    "Mouth Chin Distance": number
  }

  "Chin"!: {
    "Chin Tip Position": number
    "Chin Length": number
    "Chin Protrusion": number
    "Chin Depth": number
    "Chin Size": number
    "Chin Height": number
    "Chin Width": number
  }

  "Jaw"!: {
    "Jaw Protrusion": number
    "Jaw Width": number
    "Lower Jaw": number
    "Jaw Contour": number
  }
  
  "Hair"!: {
    "Hair": number
    "Hair Color": [number, number, number]
    "Luster": number
    "Root Darkness": number
    "White Hairs": number
  }

  "Eyebrows"!: {
    "Brow": number
    "Brow Color": [number, number, number] | undefined
    "Luster": number | undefined
    "Root Darkness": number | undefined
    "White Hairs": number | undefined
  }

  "Facial  Hair"!: {
    "Beard": number
    "Beard Color": [number, number, number] | undefined
    "Luster": number | undefined
    "Root Darkness": number | undefined
    "White Hairs": number | undefined
    "Stubble": number
  }

  "Eyelashes"!: {
    "Eyelashes": number
    "Eyelashes Color": [number, number, number] | undefined
  }

  "Eyes"!: {
    "Right Iris Size": number
    "Right Iris Color": [number, number, number]
    "R Eye Clouding": number
    "R Eye Clouding Color": [number, number, number]
    "R Eye White Color": [number, number, number]
    "R Eye Position": number
    "Left Iris Size": number | undefined
    "Left Iris Color": [number, number, number] | undefined
    "L Eye Clouding": number | undefined
    "L Eye Clouding Color": [number, number, number] | undefined
    "L Eye White Color": [number, number, number] | undefined
    "L Eye Position": number | undefined
  }

  "Skin  Features"!: {
    "Pores": number
    "Skin Luster": number
    "Dark Circles": number
    "Dark Circles Color": [number, number, number]
  }

  "Cosmetics"!: {
    "Eyeliner": number
    "Eyeliner Color": [number, number, number]
    "Eyeshadow Upper": number
    "Eyeshadow Color Upper": [number, number, number]
    "Eyeshadow Lower": number
    "Eyeshadow Color Lower": [number, number, number]
    "Cheeks": number
    "Cheeks Color": [number, number, number]
    "Lipstick": number
    "Lipstick Color": [number, number, number]
  }

  "Tattoo/Mark/Eyepatch"!: {
    "Tattoo Mark": number
    "Tattoo Mark Color": [number, number, number]
    "Tweak  Tattoo/Mark": {
      "Position Vert": number
      "Position Horiz": number
      "Angle": number
      "Expansion": number
      "Flip": boolean
    }
    "Eyepatch": number
    "Eyepatch Color": [number, number, number]
  }

  constructor(init:  Required< Appearance>) {
    Object.assign(this, init)
  }
}