'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useState } from 'react';
import { encodePassphrase, generateRoomId, randomString } from '@/lib/client-utils';
import styles from '../styles/Home.module.css';

// function Tabs(props: React.PropsWithChildren<{}>) {
//   const searchParams = useSearchParams();
//   const tabIndex = 1;

//   const router = useRouter();
//   // function onTabSelected(index: number) {
//   //   const tab = index === 1 ? 'custom' : 'demo';
//   //   router.push(`/?tab=${tab}`);
//   // }

//   let tabs = React.Children.map(props.children, (child, index) => {
//     return (
//       <button
//         className="lk-button"
//         // onClick={() => {
//         //   if (onTabSelected) {
//         //     onTabSelected(index);
//         //   }
//         // }}
//         aria-pressed={true}
//       >
//         {/* @ts-ignore */}
//         {child?.props.label}
//       </button>
//     );
//   });

//   return (
//     <div className={styles.tabContainer}>
//       <div className={styles.tabSelect}>{tabs}</div>
//       {/* @ts-ignore */}
//       <CustomConnectionTab label="Custom" />
//     </div>
//   );
// }

// function CustomConnectionTab(props: { label: string }) {
//   const router = useRouter();

//   const [e2ee, setE2ee] = useState(false);
//   const [sharedPassphrase, setSharedPassphrase] = useState(randomString(64));

//   const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target as HTMLFormElement);
//     const serverUrl = formData.get('serverUrl');
//     const token = formData.get('token');
//     if (e2ee) {
//       router.push(
//         `/custom/?liveKitUrl=${serverUrl}&token=${token}#${encodePassphrase(sharedPassphrase)}`,
//       );
//     } else {
//       router.push(`/custom/?liveKitUrl=${serverUrl}&token=${token}`);
//     }
//   };
//   return (
//     <form className={styles.tabContent} onSubmit={onSubmit}>
//       <p style={{ marginTop: 0 }}>
//         Connect LiveKit Meet with a custom server using LiveKit Cloud or LiveKit Server.
//       </p>
//       <input
//         id="serverUrl"
//         name="serverUrl"
//         type="url"
//         value="https://server.oemeet.com/"
//         disabled
//         required
//       />
//       <textarea
//         id="token"
//         name="token"
//         placeholder="Token"
//         required
//         rows={5}
//         style={{ padding: '1px 2px', fontSize: 'inherit', lineHeight: 'inherit' }}
//       />
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//         <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
//           <input
//             id="use-e2ee"
//             type="checkbox"
//             checked={e2ee}
//             onChange={(ev) => setE2ee(ev.target.checked)}
//           ></input>
//           <label htmlFor="use-e2ee">Enable end-to-end encryption</label>
//         </div>
//         {e2ee && (
//           <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
//             <label htmlFor="passphrase">Passphrase</label>
//             <input
//               id="passphrase"
//               type="password"
//               value={sharedPassphrase}
//               onChange={(ev) => setSharedPassphrase(ev.target.value)}
//             />
//           </div>
//         )}
//       </div>

//       <hr
//         style={{ width: '100%', borderColor: 'rgba(255, 255, 255, 0.15)', marginBlock: '1rem' }}
//       />
//       <button
//         style={{ paddingInline: '1.25rem', width: '100%' }}
//         className="lk-button"
//         type="submit"
//       >
//         Connect
//       </button>
//     </form>
//   );
// }

export default function Page() {
  return (
    <>
      <main className={styles.main} data-lk-theme="default">
        <div className="header">
          <img src="/images/LogoHFitted.svg" alt="OEASE Meet" width="780" height="75" />
        </div>
      </main>
      <footer data-lk-theme="default">
        Visit our homepage{' '}
        <a href="https://oease.net" rel="noopener">
          OEASE Solutions
        </a>
        .
      </footer>
    </>
  );
}
