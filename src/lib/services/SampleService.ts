import {SignUpService, SignInService} from '../useCases';
import {Credential, Email, User} from '../entities';

// TODO: This is the api layer for the repository will need to confirm if it's appropriate to have api
// information within this section of the folder system.
export class SampleService implements SignInService, SignUpService {
    async signInWithCredential(credential: Credential): Promise<User> {
        return Promise.resolve(
            new User("Sample Service", "User", "sampleservice@email.com")
        )
    }

    async signUpUser(user: User, credential: Credential): Promise<User> {
        return Promise.resolve(user);
    }

    async verifyExistingEmail(email: Email): Promise<boolean> {
        return Promise.resolve(false)
    }
}