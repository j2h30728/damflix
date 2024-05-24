import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import type { AuthError, UserCredential } from 'firebase/auth';

import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { auth, gitHubAuthProvider, googleAuthProvider } from '../../fbase';

export const useMutationSignUpWithEmail = (
  useMutationOptions: UseMutationOptions<UserCredential, AuthError, { email: string; password: string }>
): UseMutationResult<UserCredential, AuthError, { email: string; password: string }> => {
  return useMutation<UserCredential, AuthError, { email: string; password: string }>({
    mutationFn: ({ email, password }) => createUserWithEmailAndPassword(auth, email, password),
    ...useMutationOptions,
  });
};

export const useMutationSignInWithEmail = (
  useMutationOptions: UseMutationOptions<UserCredential, AuthError, { email: string; password: string }>
): UseMutationResult<UserCredential, AuthError, { email: string; password: string }> => {
  return useMutation<UserCredential, AuthError, { email: string; password: string }>({
    mutationFn: ({ email, password }) => signInWithEmailAndPassword(auth, email, password),
    ...useMutationOptions,
  });
};

export function useGoogleAuthSignInWithPopup(
  useMutationOptions?: UseMutationOptions<UserCredential, AuthError>
): UseMutationResult<UserCredential, AuthError, void, unknown> {
  return useMutation<UserCredential, AuthError, void, unknown>({
    mutationFn: () => {
      return signInWithPopup(auth, googleAuthProvider);
    },
    ...useMutationOptions,
  });
}

export function useGitHubAuthSignInWithPopup(
  useMutationOptions?: UseMutationOptions<UserCredential, AuthError>
): UseMutationResult<UserCredential, AuthError, void, unknown> {
  return useMutation<UserCredential, AuthError, void, unknown>({
    mutationFn: () => {
      return signInWithPopup(auth, gitHubAuthProvider);
    },
    ...useMutationOptions,
  });
}
