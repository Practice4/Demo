/**
 * Created by admin on 2016/5/15.
 */
//1.��ͼƬ�ֲ�  ���һ�»���һ��
    //2.СͼƬ�ʹ�ͼƬһ���ֲ�  �����ͼƬ�͵���Ҽ�ͷЧ��һ��
    //3.�ܹ�������ͼƬһ�����ҹ���  �����ϵ�ʱ��һ��ֹͣ

$(function () {
    //1.���һ�´�ͼƬ��ת����һ��

    $('.bld-bigImg').click(function () {
        $('.bld-bigImg ul').append($('.bld-bigImg ul li:first'));
        $('.centerImg ul').append($('.centerImg ul li:first'));

    });


//����Ҽ�ͷ�ѵ�һ��СͼƬ�ƶ�������ul�����
    $('.rightArrow').click(function () {
        $('.bld-bigImg ul').append($('.bld-bigImg ul li:first'));
        $('.centerImg ul').append($('.centerImg ul li:first'));

    });
    //������ͷ�����һ��СͼƬ�ƶ�������ul����ǰ��
    $('.leftArrow').click(function () {
        $('.bld-bigImg ul').prepend($('.bld-bigImg ul li:last'));
        $('.centerImg ul').prepend($('.centerImg ul li:last'));
    });
    //3.1�ܹ�������ͼƬһ�����ҹ���  �����ϵ�ʱ��һ��ֹͣ
    var timer;
    timer = setInterval(function () {
        $('.rightArrow').click();
    }, 1000);
    //3.2.1�����ϵ�ʱ��һ��ֹͣ
    $('.bld-bigImg,.bld-smallImg').on(
        {
            'mouseenter': function () {
                clearInterval(timer);
            }
        }
    );
    //3.2.1����뿪��ʱ��һ��ʼ
    $('.bld-bigImg,.bld-smallImg').on({
        'mouseleave': function () {
            timer = setInterval(function () {
                $('.rightArrow').click();
            }, 1000);
        }

    });
});

