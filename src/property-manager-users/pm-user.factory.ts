import {
  applyChances,
  getDomain,
  randomBool,
  randomFirstName,
  randomInt,
  randomLastName,
  randomPhoneNumber,
} from '../shared/misc.factory';

export function randomPMUser(company: CompanyResponseVO): any {
  const domain = getDomain(company.email) || 'hotmail.com';
  const firstName = randomFirstName();
  const lastName = randomLastName();
  const username = firstName.toLowerCase() + '.' + lastName.toLowerCase();
  const user = {
    firstName: randomFirstName(),
    lastName: randomLastName(),
    phoneNumber: randomPhoneNumber(),
    email: username + '@' + domain,
    username,
    isManager: randomBool(),
    // TODO: should be taken from an existent user (should this user be taken from the same pm-users group or can be any??)
    // managerId: 
    profilePictureUrl: `https://${domain}/avatars/${username}.jpg`,
  };

  const meta = {
    firstName: { chanceOfNull: 0 },
    lastName: { chanceOfNull: 0 },
    phoneNumber: { chanceOfNull: 0.5 },
    email: { chanceOfNull: 0.5 },
    username: { chanceOfNull: 0 },
    isManager: { chanceOfNull: 0 },
    managerId: { chanceOfNull: 0.5 },
    profilePictureUrl: { chanceOfNull: 0.5 },
  };
  applyChances(user, meta);
  return user;
}
