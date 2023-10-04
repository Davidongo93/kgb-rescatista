import styles from './Social.module.css';

const Social = () => {
  return (
    <div className={styles.socialContainer}>
      <a
        href="https://www.instagram.com/judasgaleano/?hl=es"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.customIconLink}
      >
        <i className={`fab fa-instagram ${styles.customIcon}`}></i> {/* Icono de Instagram */}
      </a>
      <a
        href="https://www.facebook.com/judas.a.galeano"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.customIconLink}
      >
        <i className={`fab fa-facebook ${styles.customIcon}`}></i> {/* Icono de Facebook */}
      </a>
      <a
        href="https://www.youtube.com/channel/UCicAuv0Aylu-BldY8OAkB3A"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.customIconLink}
      >
        <i className={`fab fa-youtube ${styles.customIcon}`}></i> {/* Icono de YouTube */}
      </a>
      <a
        href="https://www.tiktok.com/@judasgaleano"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.customIconLink}
      >
        <i className={`fab fa-tiktok ${styles.customIcon}`}></i> {/* Icono de YouTube */}
      </a>
      <a
        href=" https://wa.me/573003485579
        "
        target="_blank"
        rel="noopener noreferrer"
        className={styles.customIconLink}
      >
        <i className={`fab fa-whatsapp ${styles.customIcon}`}></i> {/* Icono de YouTube */}
      </a>
    </div>
  );
};

export default Social;
