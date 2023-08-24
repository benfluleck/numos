import { render, screen } from '@utils/testUtils';
import Input from '@components/Input/Input';


const defaultProps = {
  type: 'text',
  name: 'testComponent',
  error: '',
  title: 'My Title',
  value: 'input',
  required: true,
  onChange: () => {},

}


describe('Component - Input', () => {
  it('should render', async () => {
    render(<Input {...defaultProps} />,{})
    
    expect(screen.getByTestId('input-component')).toBeInTheDocument()
  });

  it('should render a textbox with content', async () => {
    render(<Input {...defaultProps} />,{})

    expect(screen.getByRole("textbox")).toHaveAttribute("name", "testComponent");
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
  });
});