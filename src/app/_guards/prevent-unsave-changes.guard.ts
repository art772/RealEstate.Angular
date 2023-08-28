import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsaveChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  if (component.editForm?.dirty) {
    return confirm("Czy jesteś pewien, że chcesz opuścić stronę? Niezapisane zmiany zostaną uracone.")
  }

  return true;
};
