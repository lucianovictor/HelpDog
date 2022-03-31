import styles from './styles.module.scss'

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.content}>
      <p>
        Ajude quem <span>precisa</span> {''}de ajuda
      </p>
      <h1>Com apenas 1 real você pode me ajudar a alimentar cães de ruas.</h1>
    </div>
    <div className={styles.buttons}>
      <button type="button" className={styles['btn-contribute']}>
        Contribuir
      </button>
      <button type="button" className={styles['btn-contact']}>
        Entrar em contato
      </button>
    </div>
    <div className={styles.dog}>
      <img src="viralata-home.png" alt="Imagem do doguinho" />
    </div>
    <div className={styles.racao}>
      <img src="racao.png" alt="Imagem da racao do doguinho" />
    </div>
    <div className={styles.background}>
      <img src="background.png" alt="Imagem do fundo" />
    </div>
  </main>
)
