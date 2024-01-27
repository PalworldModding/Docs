import styles from './styles.module.css';
import { GoDownload } from 'react-icons/go';

export type GitHubButtonProps = {
    text: string,
    url: string
}

export default function GitHubButton({ text, url }: GitHubButtonProps) {
    return (
        <a className={styles.btn} href={url}>
            <GoDownload size={20} /> { text }
        </a>
    )
}