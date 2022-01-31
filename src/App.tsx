import logo from './logo.svg';
import styles from './App.module.css';
import {JSX} from 'solid-js';

const App: () => JSX.Element = () => (
	<div class={styles.App}>
		<header class={styles.header}>
			<img src={logo} class={styles.logo} alt="logo" />
			<p>
				Edit a<code>src/App.tsx</code> and save to reload.
			</p>
			<a
				class={styles.link}
				href="https://github.com/solidjs/solid"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn Solid
			</a>
		</header>
	</div>
);

export default App;
