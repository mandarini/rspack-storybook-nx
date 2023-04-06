import { render } from '@testing-library/react';

import UiMyLib2 from './ui-my-lib-2';

describe('UiMyLib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiMyLib2 />);
    expect(baseElement).toBeTruthy();
  });
});
