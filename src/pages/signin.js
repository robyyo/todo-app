import React from 'react';
import styles from '../styles/Signin.module.css';
import { useSession, signIn } from 'next-auth/react';

const Signin = () => {
  const { data: session } = useSession();

  return (
    <main className={styles.main}>
      <div className={styles.formWrapper}>
        <div className={styles.formTitle}>Sign In</div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"></input>
            <button type="text">Sign in with Email</button>
          </div>
          <div className={styles.formSeparator}>
            <svg viewBox="0 0 100 1">
              <line x1="0" y1="0" x2="95" y2="0" stroke="#258599" />
            </svg>
            <span>or</span>
            <svg viewBox="0 0 100 1">
              <line x1="5" y1="0" x2="100" y2="0" stroke="#258599" />
            </svg>
          </div>
          <div className={styles.formGroup}>
            <button onClick={() => signIn()}>Sign in with Google</button>
            <button>Sign in with Github</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signin;

// import { getProviders, signIn } from 'next-auth/react';

// export default function SignIn({ providers }) {
//   return (
//     <>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name}>
//           <button onClick={() => signIn(provider.id)}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }

// import { signIn, getCsrfToken, getProviders } from 'next-auth/react';
// import styles from '../../styles/Signin.module.css';

// const Signin = ({ csrfToken, providers }) => {
//   return (
//     <div style={{ overflow: 'hidden', position: 'relative' }}>
//       <div className={styles.wrapper} />
//       <div className={styles.content}>
//         <div className={styles.cardWrapper}>
//           <div className={styles.cardContent}>
//             <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//             <input
//               placeholder="Email (Not Setup - Please Use Github)"
//               size="large"
//             />
//             <button className={styles.primaryBtn}>Submit</button>
//             <hr />
//             {providers &&
//               Object.values(providers).map((provider) => (
//                 <div key={provider.name} style={{ marginBottom: 0 }}>
//                   <button onClick={() => signIn(provider.id)}>
//                     Sign in with {provider.name}
//                   </button>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//       {/* eslint-disable-next-line @next/next/no-img-element */}
//     </div>
//   );
// };

// export default Signin;

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: {
//       providers,
//     },
//   };
// }