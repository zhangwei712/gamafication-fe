import { FC, ReactNode } from 'react';
const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  // const [modal, contextHolder] = Modal.useModal();

  // const t = auth.jwtTokenVerify();
  // // token 过期
  // if (!t || !t.verified) {
  //   setTimeout(() => {
  //     modal.error({
  //       title: '登录失效',
  //       content: '登录状态已过期，请重新登录',
  //       onOk: () => {
  //         auth.logout();
  //       },
  //     });
  //   }, 0);
  //   return <>{contextHolder}</>;
  // }

  return <div>{children}</div>;
};

export default AuthGuard;
