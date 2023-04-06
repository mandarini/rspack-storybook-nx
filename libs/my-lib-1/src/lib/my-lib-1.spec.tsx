import { render } from '@testing-library/react';

import MyLib1 from './my-lib-1';

describe('MyLib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLib1 />);
    expect(baseElement).toBeTruthy();
  });
});
