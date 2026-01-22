import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const getEnvVar = (name: string) => {
	const value = process.env[name];
	if (!value) return undefined;
	// Strip quotes if they exist and trim
	return value.replace(/^["'](.+)["']$/, '$1').trim();
};

const initFirebaseAdmin = () => {
	const apps = getApps();

	if (!apps.length) {
		const projectId = getEnvVar("FIREBASE_PROJECT_ID");
		const clientEmail = getEnvVar("FIREBASE_CLIENT_EMAIL");
		const privateKey = getEnvVar("FIREBASE_PRIVATE_KEY")?.replace(/\\n/g, "\n").replace(/^["'](.+)["']$/, '$1').trim();

		if (projectId && clientEmail && privateKey) {
			initializeApp({
				credential: cert({
					projectId,
					clientEmail,
					privateKey,
				})
			})
		} else {
			console.warn("Firebase Admin credentials missing or incomplete. Skipping initialization.");
		}
	}
	return {
		auth: getAuth(),
		db: getFirestore()
	}
}

export const { auth, db } = initFirebaseAdmin();