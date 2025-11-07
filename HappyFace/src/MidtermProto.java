import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.util.ArrayList;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.Timer;

public class MidtermProto {
	JFrame frame;
	JPanel TextPanel;
	JTextField text;
	JLabel label;
	Timer timer;
	JButton start,stop;
	ArrayList<PosCircle> list;
	final int STEP=5;		// ���� �����̴� ����
	final int SIZE=40;		// ���� ũ��
	public static void main(String[] args) {
		MidtermProto mf = new MidtermProto();
		mf.go();
	}

	private void go() {
		frame = new JFrame("�� Ƣ���");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		TextPanel  = new JPanel();
		label = new JLabel("생성할 원의 개수");
		text = new JTextField(10);
		TextPanel.add(label);
		TextPanel.add(text);

		// �߾� �гΰ� �ϴ� �г��� �����.
		MyDrawPanelArrayList cPanel = new MyDrawPanelArrayList();	// �߾��г�
		JPanel bPanel = new JPanel();	// �ϴ��г�

		// �ϴ� �гο� ��ư�� �߰��Ѵ�.
		 start = new JButton("����");
		 stop = new JButton("����");
		 ButtonListener bl = new ButtonListener();
			start.addActionListener(bl);
			stop.addActionListener(bl);
			
		bPanel.add(start); bPanel.add(stop);
		

		frame.add(cPanel, BorderLayout.CENTER);
		frame.add(bPanel, BorderLayout.SOUTH);
		cPanel.addMouseListener(new MyMouseListener());
		frame.add(TextPanel, BorderLayout.NORTH);

		frame.setSize(500,500);
		frame.setVisible(true);
		timer = new Timer(100, new TimerListener());
		timer.start();
		
	}

	private class TimerListener implements ActionListener {
		@Override
		public void actionPerformed(ActionEvent e) {
			frame.repaint();		
		}	
	}
	class MyDrawPanelArrayList extends JPanel {
		// �̹����� ���� �𼭸� ��ǥ�� ����

		public MyDrawPanelArrayList() {
			list = new ArrayList<PosCircle>();
			for (int i=0; i<3; i++) {
				list.add(new PosCircle((int)(Math.random()*450), (int)(Math.random()*250), SIZE, SIZE, Color.blue));
			}
			try {
					text.getActionListeners();
				
			}catch(Exception e){
				System.out.print("입력 오료");
				
			}
			
		}

		@Override
		public void paintComponent(Graphics g) {	// �� �޼ҵ�� ȭ���� ���������ɶ����� �����
			super.paintComponent(g);
			this.setBackground(Color.white);
			
			int w = this.getWidth();
			int h= this.getHeight();

			for (PosCircle icon : list) {
				if (icon.pX > w-SIZE || icon.pX < 0)
					icon.moveX=-icon.moveX;
				if (icon.pY > h-SIZE || icon.pY < 0)
					icon.moveY=-icon.moveY;
			}
			for (PosCircle icon : list) {
				icon.move(icon.moveX,icon.moveY);				// �������� ���� ���̸�... x�� �������� ����
				icon.draw(g);						// ȭ�鿡 �׷� ��			
			}
		}
	}
	
	private class ButtonListener implements ActionListener {
		@Override
		public void actionPerformed(ActionEvent e) {
			// TODO Auto-generated method stub
			JButton b = (JButton) e.getSource();
			if (b==null)
				timer.stop();
			else if (b==start)
				timer.start();
			else if (b==stop)
				System.exit(0);
			else {
				list.remove(0);
				if (list.isEmpty())
					System.exit(0);
			}
		}
	}

	// ImageIcon�� ��ǥ�� ��ġ�� �ο��ϰ��� ImageIcon Ŭ������ �����
	class PosCircle {
		int pX;				// ImageIcon�� X��ǥ
		int pY;				// ImageIcon�� y��ǥ
		int width;			// ImageIcon�� ����
		int height;			// ImageIcon�� ����
		int moveX=STEP;		// x�������� ����. ����̸� ����������. �����̸� ��������
		int moveY=STEP;		// y�������� ����. ����̸� ����������. �����̸� ��������
		Color c;			// ���� ��
		

		public PosCircle(int x, int y, int width, int height, Color c) {
			pX=x;
			pY=y;
			this.width = width;
			this.height = height;
			this.c = c;
		}

		public void move(int x, int y) {
			pX += x;
			pY += y;
		}

		public void draw(Graphics g) {
			g.setColor(c);
			g.fillOval(pX,  pY,  SIZE, SIZE);
		}
		
	}
	
	private class MyMouseListener implements MouseListener {
		@Override
		public void mouseClicked(MouseEvent e) {}
		@Override
		public void mousePressed(MouseEvent e) {
			// �г��� ���콺�� ������, ���� ���� ��ǥ�� �� �� ����
			int pX=e.getX();
			int pY=e.getY();
			//Color co;
			for (PosCircle c : list) {
				if (distance(c, pX, pY) <= SIZE) {
					c.c= Color.RED;
				}
				if (distance(c, pX, pY) <= SIZE) {
					//list.remove(c);
					break;
				}
			}
			if (list.isEmpty())
				System.exit(0);
		}
		@Override
		public void mouseReleased(MouseEvent e) {}
		@Override
		public void mouseEntered(MouseEvent e) {
		}
		@Override
		public void mouseExited(MouseEvent e) {
		}

		private double distance(PosCircle c, int x, int y) {
			int cX, cY; 	
			cX=c.pX+c.width/2;
			cY=c.pY+c.height/2;
			
			return Math.sqrt(Math.pow(cX-x, 2)+ Math.pow(cY-y,2));
		}
	}
}
