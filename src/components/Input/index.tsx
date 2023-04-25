import styles from './styles.module.css'

interface props {
  id: string;
  name: string;
  label: string;
  title?: string | null;
  placeholder?: string | null;
  autoComplete?: string | null;
}

export default function Input({
  id,
  name,
  label,
  title,
  placeholder,
  autoComplete,
}: props) {
  let props = {
    type: 'text',
    id,
    name,
    title: title ?? `${label}: ...`,
    placeholder: placeholder ?? label,
    autoComplete: autoComplete ?? "off",
  }

  return <div className={styles.form_control}>
    <label htmlFor={id}>{label}</label>
    <input {...props} />
  </div>
}